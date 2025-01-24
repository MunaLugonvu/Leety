var TimeLimitedCache = function() {
     
        this.store = new Map(); // Store key-value pairs with expiration times
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
     const now = Date.now(); // Get the current timestamp
        const expiration = now + duration; // Calculate expiration time
        const keyExists = this.store.has(key) && this.store.get(key).expiration > now;

        // Overwrite the key with the new value and expiration time
        this.store.set(key, { value, expiration });

        return keyExists;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
      const now = Date.now(); // Get the current timestamp
        const entry = this.store.get(key);

        // Check if the key exists and has not expired
        if (entry && entry.expiration > now) {
            return entry.value;
        }

        return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
         const now = Date.now(); // Get the current timestamp
        let count = 0;

        // Count all keys that have not expired
        for (const [key, { expiration }] of this.store) {
            if (expiration > now) {
                count++;
            } else {
                this.store.delete(key); // Clean up expired keys
            }
        }

        return count;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
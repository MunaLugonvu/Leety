class EventEmitter {
    constructor() {
        this.events = new Map(); // Store event listeners
    }
    /**
     * @param {string} event
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(event, callback) {
          if (!this.events.has(event)) {
            this.events.set(event, []); // Initialize if event doesn't exist
        }
        this.events.get(event).push(callback); // Add callback
        return {
            unsubscribe: () => {
                  const listeners = this.events.get(event);
                if (listeners) {
                    this.events.set(event, listeners.filter(fn => fn !== callback)); // Remove callback
                }
            }
        };
    }
    
    /**
     * @param {string} event
     * @param {Array} args
     * @return {Array}
     */
    emit(event, args = []) {
        if (!this.events.has(event)) {
            return []; // No listeners
        }
        return this.events.get(event).map(callback => callback(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
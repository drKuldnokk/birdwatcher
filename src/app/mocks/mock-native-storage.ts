export class MockNativeStorage {

    public data: Map<any, any> = new Map<any, any>();
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    setItem(reference: string, value: any): Promise<any> {
      this.data.set(reference, value);
      return new Promise((resolve, reject) => {
        resolve();
      });
    }
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    getItem(reference: string): Promise<any> {
      return Promise.resolve(this.data.get(reference));
    }
    /**
     * Retrieving all keys
     * @returns {Promise<any>}
     */
    keys(): Promise<any> {
      return Promise.resolve(Array.from(this.data.keys()));
    }
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    remove(reference: string): Promise<any> {
      return Promise.resolve("remove remove");
    }
    /**
     * Removes all stored values.
     * @returns {Promise<any>}
     */
    clear(): Promise<any> {
      return Promise.resolve("dummy clear");
    }
}

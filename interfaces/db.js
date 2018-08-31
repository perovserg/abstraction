class db {

    /**
     * Save to db
     * @param data
     */
    static save(data) {
        console.log(`[DB] Saved: ${JSON.stringify(data)}`);
    }
}

export default db;

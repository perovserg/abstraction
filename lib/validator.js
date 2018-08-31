class Validator {

    /**
     * Throws if data is empty
     * @param data
     */
    static validate(data) {
        //if (!data) throw new Error('Empty data');
        if (!data) {
            console.log('Empty data');
            return false;
        }
        return true;
    }
}

export default Validator;

class Node {

    /**
     * @param {Object} network - to join
     * @param {String} name - node name
     * @param {Boolean} isBrokenNode
     */
    constructor(network, name, isBrokenNode) {
        this._name = name;
        this._network = network;
        this._isBrokenNode = isBrokenNode;
    }

    /**
     * Node handler
     * @param {Object} data
     * @return {Object}
     */
    handle(data) {

        console.log(`[${this._name}] Recv: ${JSON.stringify(data)}`);

        // send something to node3 here
        if (this._name !== 'node3') this._network.send('node3', {message: 'Hello! node3'});

        return this._isBrokenNode ? undefined : {result: data}
    }
}

export default Node;
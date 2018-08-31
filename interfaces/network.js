import Node from './node';


class Network {

    constructor() {
        this._nodes = {};
    }

    /**
     * Creating node instance
     * @param {string} name
     * @param {Boolean} [isBrokenNode]
     */
    createNode(name, isBrokenNode = false) {
        if (!name) throw new Error('Got empty node name!');
        const node = new Node(this, name, isBrokenNode);
        this._nodes = {...this._nodes, ...{[name]: node}};
    }

    /**
     * Sending to node instance
     * @param name
     * @param data
     * @return {Object}
     */
    send(name, data) {
        const node = this.getNode(name);
        const result = node.handle(data);
        console.log(`[${name}] Got: ${JSON.stringify(result)}`);
        return result;
    }

    getNode(name) {
        return this.nodes[name];
    }

    get nodes() {
        return this._nodes;
    }
}

export default Network;

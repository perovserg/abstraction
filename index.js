import db from './interfaces/db';
import Network from './interfaces/network';

import app from './lib/app';
import Validator from './lib/validator';


const network = new Network();
network.createNode('node1');
network.createNode('node2');
network.createNode('node3');
network.createNode('node4', true);


const resp1 = network.send('node1', {foo: 'bar'});
if (Validator.validate(resp1)) {
    db.save(resp1);
    app.publish(resp1);
}

const resp2 = network.send('node2', {foooo: 'barrrr!'});
if (Validator.validate(resp2)) {
    db.save(resp2);
    app.publish(resp2);
}

const resp4 = network.send('node4', 'qwe');
if (Validator.validate(resp4)) {
    db.save(resp4);
    app.publish(resp4);
}


const SHA256 = require("crypto-js/sha256");

const EC=require('elliptic').ec;
const ec=new EC('secp256k1');

window.getHash= function(pid,ownername,state,district,village,pincode,uid)
{
    return SHA256(pid+ownername+state+district+village+pincode+uid).toString()
}
window.getDigitalSign = function(pid,ownername,state,district,village,pincode,uid)
{
    var t0 = performance.now();

    const key = ec.genKeyPair();

    var t1 = performance.now();
    console.log("genKeyPair func took " + (t1 - t0) + " milliseconds.");

    const publickey=key.getPublic('hex');
    localStorage.setItem(pid, publickey);
    const privatekey=key.getPrivate('hex');
    const msg_hash=SHA256(pid+ownername+state+district+village+pincode+uid).toString();

    var t5 = performance.now();

    const sig = key.sign(msg_hash,'base64');
    const signature=sig.toDER('hex');

    var t6 = performance.now();
    console.log("sign func took " + (t6 - t5) + " milliseconds.");
    const x=signature.match(/.{1,60}/g);
    // console.log("hash "+msg_hash);
    var keys=Object.entries(localStorage);
// console.log(keys);
    return x;
}

window.verify = function(hash,publickey,ds)
{
    const pkey=ec.keyFromPublic(publickey,'hex');
    var  x = pkey.verify(hash,ds);

    return x;
}

// const pkey=ec.keyFromPublic(publickey,'hex');
// var  x = pkey.verify(msg_hash,signature);

// console.log('verify:', x);

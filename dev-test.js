const Block = require('./block');

const booBlock = Block.mineBlock(Block.genesis(), "boo");
console.log(booBlock.toString());
/*
const block = new Block('boo', 'bar', 'zoo', 'baz');
console.log(block.toString());
console.log(Block.genesis().toString());
*/
import crypto from 'crypto';

interface BlockShape {
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return '';
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newblock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newblock);
  }
  public getBlocks() {
    return [...this.blocks]; //이렇게 return하면 hacking으로 block을 추가해도 추가된 block이 나오지 않음
  }
}

const blockchain = new Blockchain();

blockchain.addBlock('First Block');
blockchain.addBlock('Second Block');
blockchain.addBlock('Third Block');

blockchain.getBlocks().push(new Block('xxxxx', 11111, 'Hacked!'));

console.log(blockchain.getBlocks());

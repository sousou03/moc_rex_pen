//--------------------------------------------------
//
//  Order
//
//--------------------------------------------------

export default class Order {

  constructor(len) {

    this.current = 0;
    this.old = null;
    this.next = 1;
    this.prev = len-1;
    this.len = len;

    this.isLoop = true;

    this.setup(len);
    this.setEvents();

  }

  setup(len) {

    this.current = 0;
    this.old = null;
    this.next = 1;
    this.prev = len-1;
    this.len = len;

  }

  go() {

    // currentの計算
    this.calculateOrder('right');

  }

  back() {


    // currentの計算
    this.calculateOrder('left');

  }

  calculateOrder(dir) {

    // ------------------------------------------------------------
    // 端で止める
    // ------------------------------------------------------------
    if (!this.isLoop) {
      if (dir=='right') {

        this.current++;
        if (this.current>this.len-1) this.current=this.len-1;
        this.next = this.current+1;
        this.prev = this.current-1;

      } else {

        this.current--;
        if (this.current<0) this.current=0;  
        this.next = this.current+1;
        this.prev = this.current-1;

      }
    }

    // ------------------------------------------------------------
    // ループ
    // ------------------------------------------------------------
    if (this.isLoop) {
      if (dir=='right') {

        this.current++;

        if (this.current>this.len-1) {

          this.current=0;
          this.next=this.current+1;
          this.prev=this.len-1;

        } else {

          this.next = this.current+1;
          this.prev = this.current-1;

        }

        if (this.current==this.len-1) {

          this.next=0;
          this.prev=this.current-1;

        }

      } else {

        this.current--;

        if (this.current<0) {

          this.current=this.len-1;
          this.next = 0;
          this.prev = this.current-1;

        } else {

          this.next = this.current+1;
          this.prev = this.current-1;

        }

        if (this.current==0) {

          this.next=1;
          this.prev=this.len-1;

        }

      }

      this.old = this.current;
    }

  }

  setCur(num) {

    this.current = num;
    this.next = this.current+1;
    this.prev = this.current-1;

    if (this.next>this.len-1) this.next=0;
    if (this.prev<0) this.prev=this.len-1;

  }

  setEvents() {


  }
  
}
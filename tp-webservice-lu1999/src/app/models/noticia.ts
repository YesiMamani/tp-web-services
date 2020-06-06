export class Noticia {
    id:number;
    cap:string;
    tit:string;
    des:string;
    img:string;

    Noticia(id?:number, cap?:string, tit?:string, des?:string, img?:string){
        this.id=id;
        this.cap=cap;
        this.tit=tit;
        this.des=des;
        this.img=img;
    }
}
 
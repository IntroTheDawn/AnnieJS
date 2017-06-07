/**
 * @module annie
 */
namespace annie {
    /**
     * 声音类
     * @class annie.Sound
     * @extends annie.Media
     * @public
     * @since 1.0.0
     */
    export class Sound extends Media {
        /**
         * 构造函数
         * @method  Sound
         * @since 1.0.0
         * @public
         * @param src
         * @example
         *      var soundPlayer = new annie.Sound('http://test.annie2x.com/biglong/apiDemo/annieBitmap/resource/music.mp3');
         *          soundPlayer.play();//播放音乐
         *          //soundPlayer.pause();//暂停音乐
         *          //soundPlayer.stop();//停止音乐
         */
        public constructor(src: any) {
            super(src, "Audio");
            this._instanceType = "annie.Sound";
            annie.Sound._soundList.push(this);
        }

        /**
         * 从静态声音池中删除声音对象,如果一个声音再也不用了，建议先执行这个方法，再销毁
         * @method destory
         * @public
         * @since 1.1.1
         */
        public destory():void{
            let len:number=annie.Sound._soundList.length;
            for(var i=len-1;i>=0;i--){
                if(!annie.Sound._soundList[i]||annie.Sound._soundList[i]==this){
                    annie.Sound._soundList.splice(i,1);
                }
            }
        }
        //声音对象池,停止所有声音时使用
        public static _soundList:any=[];
    }
}

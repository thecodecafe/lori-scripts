const browserSync = require('browser-sync').create();
const RELAD = browserSync.reload;

class SyncServer{

    constructor(options, files){
        this.server = null;
        this.options = options;
        this.files = files || [];
    }

    start(){
        // only start if not already active
        if(browserSync.active){
            browserSync.exit();
        }
        console.log(this.options);
        this.server = browserSync.init(this.options);
        this.watch();
    }
    
    watch(){
        for(var i = 0; i < this.files.length; i++){
            gulp.watch(this.files[i]).on('change', RELOAD);
        }
        // exit browser sync on close
        process.on('close', browserSync.exit());
    }
}

module.exports = SyncServer;
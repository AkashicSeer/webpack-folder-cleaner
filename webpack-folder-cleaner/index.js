
module.exports = class WebpackFolderCleaner {
    constructor(options) {
      this.options = options;
    }
    apply(compiler) {

        console.log("Inside Webpack folder cleaner");

        if(this.options.folders){
            let foldersArr = this.options.folders;
            let foldersLen = foldersArr.length;
            
            console.log('Values for a list of folders found length ' + foldersLen);

            for( let i = 0; i < foldersLen; i++){
                console.log( "folder name " + foldersArr[i]);
            }
        }

        if(this.options){
            console.log("Values for ignoreFiles key found");
        }
      
        compiler.hooks.emit.tapAsync('WebpackFolderCleaner',(compilation, callback) => {
            let assetFiles = compilation.getAssets();
            let assetsLen = assetFiles.length;
            console.log("compilation size  " + assetsLen);
            let assetPath = compilation.getPath('bundle.js', {});
            console.log("Asset path is " + assetPath);
            if(assetsLen > 0){
                let assetsStr = 'Found this list of assets \n';

                for(let i = 0; i < assetsLen; i++){
                    assetsStr +=  assetFiles[i].name + ' \n';
                }

                console.log(assetsStr);
            }

            callback();
        });
    }
   };
export default class Utils{
    textFormatDefault(text : string){
        return text.trim().toUpperCase();
    }
    stringToNumberArray(text : string){
        return text.split(',').map( position => {
            return Number(position.trim());
        });
    }
} 
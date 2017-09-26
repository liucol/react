/**
 * Created by Administrator on 2017/9/26 0026.
 */
export function save(key,value){
    /*javascript值转换成JSON保存在localStorage*/
    return window.localStorage.setItem(key,JSON.stringify(value))
}
export function load(key){
    /*将localStorage里面的JSON字符串转换成对象返回*/
    return JSON.parse(window.localStorage.getItem(key))
}
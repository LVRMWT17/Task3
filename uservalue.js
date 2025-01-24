import res from './ee.js'
class Uservalue {
        con(){
            console.log('0-0')
            console.log('1-1')
            console.log('x-exit')
            console.log('?-help me')};
        con2(){
                console.log('0-', res[0])
                console.log('1-', res[1])
                if (res.length===3) {
                    console.log('2-', res[2])
                }
                if (res.length === 4){
                    console.log('2-', res[2])
                    console.log('3-', res[3])
                }
                console.log('x-exit')
                console.log('?-help me')};
        con3(){
                    console.log('0-', res[0])
                    console.log('1-', res[1])
                    console.log('2-', res[2])
                    if (res.length === 4){
                        console.log('3-', res[3])
                    }
                    console.log('x-exit')
                    console.log('?-help me')};  
        con4(){
            console.log('0-', 0)
            console.log('1-', 1)
            console.log('2-', 2)
            console.log('3-', 3)
            console.log('4-', 4)
            console.log('5-', 5)
            console.log('x-exit')
            console.log('?-help me')};
        }  
export default Uservalue;
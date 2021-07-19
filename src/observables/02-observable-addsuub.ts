import { observable, Observable, Observer,} from 'rxjs';

var count : number = 0;
const observer:Observer<any> = {
    next: next => console.log("Next=> ", next),
    error:  error => console.warn("Error=>", error),
    complete : () => console.info("Complete")
};


const interval$ = new Observable<number> (subs=>{

   const inter =  setInterval(()=>{
        subs.next(count++   );  
    }, 2500);

    return ()=>{
        clearInterval(inter);
    };
});

const subs = interval$.subscribe(num=> console.log("Num=> ",num));
const subs2 = interval$.subscribe(num=> console.log("Num=> ",num));
subs.add(subs2);

setTimeout(() => {
    subs.unsubscribe();    
}, 3000);

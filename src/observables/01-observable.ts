import {Observable, Observer} from "rxjs";


const observer: Observer<string> = {
    next: value => console.log("NEXT> ", value),
    error : value => console.error("ERROR> ", value),
    complete: () => console.info("Completye")   
};
//const obs$ = Observable.create();
const obs2$ = new Observable<string>(subs=>{
subs.next("hola");
subs.next("kevin");
subs.complete();
});

/*obs2$.subscribe(resp=>{
    console.log(resp)
});*/

//obs2$.subscribe(console.log);

/*obs2$.subscribe(
    value => console.log("next: ", value),
    error => console.error("error: " , error),
    () => console.info("Complete")
);*/

obs2$.subscribe(observer);
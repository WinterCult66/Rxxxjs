import { observable, Observable, Observer,} from 'rxjs';


const observer:Observer<any> = {
    next: next => console.log("Next=> ", next),
    error:  error => console.warn("Error=>", error),
    complete : () => console.info("Complete")
};


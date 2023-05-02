// 1. Import area

// Import something from somelocation/library
import MyComponent4 from "./MyComponent4";


//2. Function defination area

function MyComponent3(){
    // Every function return something
    return <div>
                Hello from MyComponent3
                <MyComponent4/>

            </div>
}


//3. Export area
export default MyComponent3;
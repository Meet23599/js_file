console.log('this is my post js project hear');

//utility functions:
//1 utiltity function to get DOM elelment from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//initilize no of parameter
let addedParamCount = 0;


//Hide the parameter box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

//if the user click on params box,hide the json box

let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

//if the user click on json box,hide the param box

let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})

//if the user clcicks on + button, add more parameter
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let param = document.getElementById('param');
    let string = ` <div class="form-row">
    <label for="url" class="col-sm-2 col-form-label"> Parameter ${addedParamCount + 2} </label>
    <div class=" col-md-4">
        <input type="text" class="form-control" id="ParameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2}">
    </div>
    <div class=" col-md-4">
        <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2}">
    </div>
    <button  class="btn btn-primary deleteParam">-</button>
    </div>`;
    //convert the element string to Dom node

    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);
    //add event listeneer to remove the parametr on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            //todo: add a cnformation box to conform parameter deletiation
            e.target.parentElement.remove();
        })
    }
    addedParamCount++;
})

//if theIuser click on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show please wait in the response box to request patient from user.
    document.getElementById('responseJsonText').value = "please wait..Fetching response..";

    //fetch  all the value user has entered
    let url = document.getElementById("url").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

   
    //if user has used parms option instedd of json,collect all the paraameters in sn object
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
            data=JSON.stringify(data);
        }
    }

    else{
        data=document.getElementById('requestJsonText').value;
    }
     //log all the value in the console for debugging
     console.log('url is', url);
     console.log('requestType is', requestType);
     console.log('contentType is', contentType);
     console.log('data is', data);
 
//if the request type is post,invoke fetch api to create a post request
if(requestType=='GET'){
    fetch(url,{
        method:'GET',
    })
    .then(response=>response.text())
    .then((text)=>{
        document.getElementById('responseJsonText').value = text;
    });
}else{
        fetch(url,{
            method:'POST',
            body:data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(response=>response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        });
}

})
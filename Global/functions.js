export const changeDateToTimeSpan=(myDate)=>{
    myDate=myDate.split("-");
    var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
    return parseInt(new Date(newDate).getTime());
}


export const changeTimeSpanToLocalDate= (timespan)=>{/// timespan is int
    var date=new Date(timespan);
    return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
}
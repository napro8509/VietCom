export const changeDateToTimeSpan=(myDate)=>{
    myDate=myDate.split("-");
    var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
    return (new Date(newDate).getTime()).toString();
}

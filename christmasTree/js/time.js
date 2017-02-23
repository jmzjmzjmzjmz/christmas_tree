/**
 * Created by Administrator on 2017/1
 **/
(function(){
    var bigMonth=[1,3,5,7,8,10,12];
    var smallMonth=[4,6,9,11];
    var contains=function(arr,obj){
        var i=arr.length;
        while(i--){
            if(arr[i]===obj){
                return true;
            }
         }
         return false;
    };
    Date.prototype.getTodayDate=function(date){
        var today=(date.getMonth()+1)+'月'+date.getDate()+'日';
        return today;
    };
    Date.prototype.getAllAnyDate=function(days,n,date){
        var operateMonth=date.getMonth()+1;
        var operateYear=date.getFullYear();
        var operateDate=date.getDate()+n;
            if(operateDate>days){
                operateMonth+=1;
                if(operateMonth>12){
                    operateYear+=1;
                    operateMonth=1;
                }
                operateDate-=days;
            }else if(operateDate<1) {
                operateMonth -= 1;
                if (operateMonth < 1) {
                    operateYear -= 1;
                    operateMonth = 12;
                }
                if (contains(bigMonth,operateMonth)) {
                    operateDate += 31;
                } else if (contains(smallMonth,operateMonth)) {
                    operateDate += 30;
                } else if (operateYear%4 == 0 && operateMonth == 2) {
                    operateDate += 29;
                } else {
                    operateDate += 28;
                }
            }
                if(operateYear==new Date().getFullYear()){
                    return operateMonth+'月'+operateDate+'日';
                }else{
                    return operateYear+'年'+operateMonth+'月'+operateDate+'日';
                }
          };
    Date.prototype.getAnyDate=function(n,date){
        var operateMonth=date.getMonth()+1;
        var operateYear=date.getFullYear();
        if(operateYear%4==0&&operateMonth==2){
            return this.getAllAnyDate(29,n,date)
        }else if(operateYear%4!=0&&operateMonth==2){
            return this.getAllAnyDate(28,n,date)
        }else if(contains(smallMonth,operateMonth)){
           return this.getAllAnyDate(30,n,date)
        }else  if(contains(bigMonth,operateMonth)){
            return this.getAllAnyDate(31,n,date)
        }
    };
    Date.prototype.getCurrentWeekDate=function(date){
        var day=date.getDay()==0?7:date.getDay();
        var weekStart=this.getAnyDate(-day+1,date);
        var weekEnd=this.getAnyDate(7-day,date);
        return weekStart+'-'+weekEnd;
    };
    Date.prototype.getMonthDate=function(date,n){
        var month=date.getMonth()+1;
        var year=date.getFullYear();
        month+=n;
        if(month==0){
            year-=1;
            month=12;
        }else if(month==13){
            year+=1;
            month=1;
        }
        var monthStart=month+'月'+1+'日';
        var monthEnd='';
        if(year%4==0&&month==2){
            monthEnd=month+'月'+29+'日'
        }else if(year%4!=0&&month==2){
            monthEnd=month+'月'+28+'日'
        }else if(smallMonth.indexOf(month)>=0){
            monthEnd=month+'月'+30+'日'
        }else if(contains(bigMonth,month)){
            monthEnd=month+'月'+31+'日'
        }
        if(year!=new Date().getFullYear()){
            return year+'年'+monthStart+'-'+monthEnd;
        }else{
            return monthStart+'-'+monthEnd;
        }
    };
    Date.prototype.getCurrentMonthDate=function(date){
        return this.getMonthDate(date,0);
    };
    Date.prototype.getLastMonthDate=function(date){
        return this.getMonthDate(date,-1);
    };
    Date.prototype.getNextMonthDate=function(date){
        return this.getMonthDate(date,1);
    };
})();




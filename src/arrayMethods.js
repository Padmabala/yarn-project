const marks={
    eng:[100,50,30,10],
    math:[33,98,12,93],
    sci:[11,32,99,100]
};
marks.english=marks.english.map(function(mark,markIndex){
    return mark+5
})

marks.english.filter(function(mark,markIndex){
    if(mark<50){
        return true
    }
    else{
        return false
    }
});
const filteredMarks={}
for(const everySubject in marks){
    console.log(everySubject)
    console.log(marks[everySubject])
    filteredMarks[everySubject]=marks[everySubject].filter(function(mark,markIndex){

        if(mark<50){
            return true
        }
        else{
            return false
        }
    })
}

const tm=marks.eng.reduce(function(total,mark,markIndex){
    return total+mark
},0);//total gets intialized with the second arg..0
console.log(tm)


    const count=0;
    const aary1=[];

    ////  ليتم العمل معها في اضافة وحدف المدخلات Object في البداية يتم تعريف مصفوفة تحتوي على 
    aary1=[
        {name:"",isCompleted:false},
        {name:"",isCompleted:true}
    ]   
    ///  Funcation في هذه ال   
const main=()=>{
    $(".ul").html("");
    aary1.forEach((aary1,i) => {
        console.log(aary1);
        $(".ul").append<`li id="li${i}"><span id=aary1${i} class=${ }`
        
    });
}

        //funcation خاصة بالجمع 
    const AddToList = ()=>{
        const newlist = $("intputbox").val()

  toDos.push(newlist.value);
    }
	
        updateCount();{
    
    }
    
const clearlist=()=>{
aary1.length=0

}    

$('#buttonadd').click(AddToList);
$(`#buttonClearComplete`).click(clearlist)
$(`#buttonClear`).click(clearlist)
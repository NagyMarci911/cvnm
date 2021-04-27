document.addEventListener('DOMContentLoaded',()=>{

    const mapItem =document.querySelector(".mapLi").children;
    const reviewItem = document.querySelector(".reviewLi").children;
    const ELTEItem = document.querySelector(".ELTELi").children;
    const cevaItem = document.querySelector(".cevaLi").children;
    let mapPic;
    let review1Pic;
    let review2Pic;
    let windowwidth = window.innerWidth;


    const mapButton = document.querySelector('.mapDropDown');
    mapButton.addEventListener('click',()=>{
        if(mapItem.length>2){            
            mapItem[mapItem.length-1].classList.toggle("hide");
        }else{
            const projectDetails = document.createElement('div');
            projectDetails.innerHTML='<div style="margin-top:10px;margin-bottom:10px">HTML, JavaScript és CSS alkalmazásával készült.<br> A jobb oldalon megjelenő ikonokat a térképre lehet húzni és a kijelölés után nyilakkal irányítani.</div><img class="bigGrowMap" src="mapGenerator.png">'
            document.querySelector(".mapLi").appendChild(projectDetails);
            if(windowwidth>=1240){
            mapPic = document.querySelector(".bigGrowMap");
            mapPic.addEventListener("mouseover",()=>{
                const bigmap = document.querySelector(".bigMap");
                bigmap.classList.remove("hide");              
            })
            mapPic.addEventListener("mouseleave",()=>{
                const bigmap = document.querySelector(".bigMap");
                bigmap.classList.add("hide");     

            })
        }
        }       
    })

    const reviewButton = document.querySelector('.ReviewDropDown');
    reviewButton.addEventListener('click',()=>{
        if(reviewItem.length>2){            
            reviewItem[reviewItem.length-1].classList.toggle("hide");        
        }else{
            const projectDetails = document.createElement('div');
            projectDetails.innerHTML='<div style="margin-top:10px;margin-bottom:10px">ASP.NET keretrendszerben készült.<br>Regisztráció után fel lehet tölteni értékeléseket és másokét megtekinteni. Az adatbázishoz a kapcsolatot ADO.NET segítségével hoztam létre.<br>(Az adatbázist nem tartalmazza a github repo.)</div><img class="bigGrowr1" src="reviewProject2.png"><img class="bigGrowr2" style="padding-top:10px;" src="reviewProject.png">'
            document.querySelector(".reviewLi").appendChild(projectDetails);
            if(windowwidth>=1240){
            review1Pic = document.querySelector(".bigGrowr1");
            review2Pic = document.querySelector(".bigGrowr2");
            review1Pic.addEventListener("mouseover",()=>{
                const bigr1 = document.querySelector(".bigr1");
                bigr1.classList.remove("hide");              
            })
            review1Pic.addEventListener("mouseleave",()=>{
                const bigr1 = document.querySelector(".bigr1");
                bigr1.classList.add("hide");     

            })
            review2Pic.addEventListener("mouseover",()=>{
                const bigr2 = document.querySelector(".bigr2");
                bigr2.classList.remove("hide");              
            })
            review2Pic.addEventListener("mouseleave",()=>{
                const bigr2 = document.querySelector(".bigr2");
                bigr2.classList.add("hide");     

            })
            }
        }    
    })

    const ELTEButton = document.querySelector('.ELTEDropDown');
    ELTEButton.addEventListener('click',()=>{
        if(ELTEItem.length>1){            
            ELTEItem[ELTEItem.length-1].classList.toggle("hide");
        }else{
            const ELTEDetails = document.createElement('div');
            ELTEDetails.innerHTML='<div style="margin-top:10px;margin-bottom:10px">Peptidek előállítása szilárd fázisú peptidszintézis alkalmazásával.<br> A termékeket műszeres analitikai eszközökkel vizsgáltam (HPLC, spektofluoriméter).</div>'
            document.querySelector(".ELTELi").appendChild(ELTEDetails);
            
        
        }       
    })

    const cevaButton = document.querySelector('.cevaDropDown');
    cevaButton.addEventListener('click',()=>{
        if(cevaItem.length>1){            
            cevaItem[cevaItem.length-1].classList.toggle("hide");
        }else{
            const cevaDetails = document.createElement('div');
            cevaDetails.innerHTML='<div style="margin-top:10px;margin-bottom:10px">Inaktivált vírust tartalmazó oltóanyag gyártásában való részvétel.<br><ul><li>Antigén előállítása tojáson</li><li>Dokumentáció GMP előírások szerint</li><li>Aszeptikus munkakörnyezet</li></ul> </div>'
            document.querySelector(".cevaLi").appendChild(cevaDetails);
            
        
        }       
    })

    const dog = document.querySelector(".fa-dog");
    dog.addEventListener('mouseover',()=>{
        const extraSection = document.querySelector(".extra");
        extraSection.classList.add("dogs");
        
    })
    dog.addEventListener('mouseleave',()=>{
        const extraSection = document.querySelector(".extra");
        extraSection.classList.remove("dogs");
    })






})
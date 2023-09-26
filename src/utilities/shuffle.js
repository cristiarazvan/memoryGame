const shuffle =() =>{

    const assets =[
        {image:'/assets/chameleon.png'},
        {image:'/assets/dolphin.png'},
        {image:'/assets/fish.png'},
        {image:'/assets/flamingo.png'},
        {image:'/assets/jungle.png'},
        {image:'/assets/parrot.png'},
        {image:'/assets/toucan.png'},
        {image:'/assets/eruption.png'},
    ];

    return [...assets, ...assets]
        .sort(()=>Math.random() - 0.5)
        .map((card)=>({...card, id:Math.random()}))
};
export default shuffle;


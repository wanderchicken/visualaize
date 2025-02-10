export const NFTAGENTDATA={
"Basics":{
    label:"Basics",
    fields:[
        {
            title:"Agent Name",
            type:"input",
            placeholder:"Enter Agent Name...",
            key:"agentName"
        },
        {
            title:"Agent Description",
            type:"textarea",
            placeholder:"Enter the Agent Description...",
            key:"agentDescription"
        
        }]
},
"Knowledge Reserve":{
    label:"Knowledge Reserve",
    fields:[
        {
            title:"Knowledge base LLM",
            key:"knowledgeBaseLLM"
        },
        {
            title:"Media LLM",
            key:"mediaLLM"
        
        }]
},
"Art Specifications":{
    label:"Art Specifications",
    fields:[
    {
        title:"Choose your Theme (max 5 words)",
        type:"input",
        placeholder:"Choose your Theme...",
        key:"theme"
    },
    {
        title:"Provide Guardrails for Art Creation",
        type:"input",
        placeholder:"Be as detailed as possible...",
        key:"guardrails"
    },
    {
        title:"Add Any Additional Elements",
        type:"textarea",
        placeholder:"Add additional Elements...",
        key:"additionalElements"
    },
    {
        title:"Specify Limitations Constraints",
        type:"input",
        placeholder:"Enter Constraints...",
        key:"constraints"
    }]},
"Agent Swarm":{
    label:"Agent Swarm",
    fields:[
    {
        title:"Uniqueness Filter",
        type:"select",
        placeholder:"Select",
        options:["Basic","Moderate","Advanced"],
        key:"uniquenessFilter"
    },
    {
        title:"Traits",
        type:"checkbox",
        options:["Accessories Traits","Background Traits"],
        key:"traits"
    },
    {
        title:"NFT Description",
        type:"textarea",
        placeholder:"Pre-filled from previous steps...",
        key:"nftDescription"
    },
    {
        title:"Prompt Refiner",
        type:"textarea",
        placeholder:"Editable input for prompt refiner...",
        key:"promptRefiner",
    },
    {
        title:"NER Recognition",
        type:"textarea",
        placeholder:"Editable input for NER Recognition...",
        key:"nerRecognition"
    },
    {
        title:"Pioneer Agent",
        type:"input",
        placeholder:"Enter pioneer agent...",
        key:"pioneerAgent"
    }]},
"NFT Definer":{
    label:"NFT Definer",
    fields:[
    {
        title:"Ticker",
        type:"input",
        key:"ticker"
    },
    {
        title:"Name",
        type:"input",
        key:"name"
    },
    {
        title:"Supply",
        type:"input",
        key:"supply"
    },
    {
        title:"Price Per Message",
        type:"input",
        key:"pricePerMessage"
    }]}
}

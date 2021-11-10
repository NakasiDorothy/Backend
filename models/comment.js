export default{
    name = "comment",
    type = "document",
    title ="comment",
    fields: [
        {
            name:  "name",
            type: "string"

        },
        {
            name:"text",
            type:"text",
            readOnly:true,
        
        },
        {
            name:"post",
            type:"reference",
            to: [
                {
                    type :"post"
                }
            ]
        }
    ]
}
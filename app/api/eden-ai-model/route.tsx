import { NextRequest, NextResponse } from "next/server";

export async function  POST(req:NextRequest) {

    const {provider,userInput,aiResp}=await req.json()
    
    const headers = {
        Authorization: "Bearer "+ process.env.DEEPSEEK_AI_API_KEY,
        'Content-Type':'application/json'
    };
    const url = "https://openrouter.ai/api/v1/chat/completions";
    const body = JSON.stringify({
        model: provider,
        messages: [
            {
                "role": "user",
                "content": userInput
            },
            ...(aiResp ? [{
                "role": "assistant",
                "content": aiResp
            }] : [])
        ]
    });

    const response = await fetch(url, {
        method: 'POST',
        headers,
        body
    });

    const result = await response.json();
    console.log(result);

    if (!response.ok) {
        return NextResponse.json({
            role: 'assistant',
            content: `Error from API: ${result.error?.message || 'Unknown error'}`
        });
    }

    const resp = {
        role: 'assistant',
        content: result.choices && result.choices.length > 0 ? result.choices[0].message.content : "No response generated"
    }
    return NextResponse.json(resp);

}
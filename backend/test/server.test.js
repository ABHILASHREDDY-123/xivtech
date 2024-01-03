const axios =  require("axios");

test('homepage-test',async ()=>{
       const resp = await axios.get(`http://localhost:8000`);
       expect(resp.status).toBe(200); 
})

test('city-test',async ()=>{
    const resp = await axios.post(`http://localhost:8000`,{
        city:["tokyo"]
    });
    expect(resp.status).toBe(200);
})

test('cities-test',async ()=>{
    const resp = await axios.post(`http://localhost:8000`,{
        city:["tokyo","america"]
    })
    expect(resp.status).toBe(200);
})
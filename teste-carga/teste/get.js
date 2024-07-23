import http from "k6/http";
import { check, group, sleep } from "k6";

const delta = 2000;
const BASE_URL = "https://vgglxtghug.execute-api.us-east-1.amazonaws.com";
const token = 'Bearer eyJraWQiOiI4TGQ5b0QyOGJVbVIrdlY3TXlJZCswOEFIVm82SjJYY0VrM1p1eGF3eWFRPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwOGIxYTBiNS03N2EyLTQwM2YtYmEyMi1jNTI2YjYxMWJkNDgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV96RnZSbmJKNFUiLCJjbGllbnRfaWQiOiIyNzhmbWltZnA3cGw0OGhzNTJqbmN0aWhsZyIsIm9yaWdpbl9qdGkiOiI2Njk5NjViMi02YTZlLTRhNzctODM4OC1hODg1MTU5Yzg1MWUiLCJldmVudF9pZCI6Ijg1NTY5ZjgxLTM0ZTctNDM3Yi05MmE0LTUxNjIxYWQ3MTY1MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MjE3NzI0NjEsImV4cCI6MTcyMTc3NjA2MSwiaWF0IjoxNzIxNzcyNDYxLCJqdGkiOiI5NDcwN2VlZC1kNDBmLTQ1ZDEtOWQ1MC0yNTAzZWZjNjA3ZDIiLCJ1c2VybmFtZSI6Im1lZGljbzEifQ.YUQj0mNuYI1WwoJbGFvlEdXhGNctAkVfdDZvY0YU9ybrkTMBdFZjiV4oRNMbVM_52dQhcLNzOCoAy7u-6VlISHgmlNKRMyCGDexRiN31vh1z1npI6aawOgt4W4g87XMqZvq-Sy0RthPECvRgucBQ4gGRJsBUDsEynUlJvm0drI5aQ0QRuXnTcJMYSM---Gu6EQb8x2CgeLeSHmLaswhAGqcd0FECT-NjnXXsAj_kXAH6A_QMsxX60eRjL7SngfTc65YCVqAxucLSTCw6c0N_NOAhfyKQUy3mH-nV5bc-3zbV_kEM_cWIZuMSzniXmDbEQ0WCMOi7hAhstdtM8zuWJQ';

export let options = {
    stages: [
        { duration: '10s', target: delta * 1 },
        { duration: '10s', target: delta * 2 },
        { duration: '10s', target: delta * 3 },
        { duration: '10s', target: delta * 4 },
        { duration: '10s', target: delta * 5 },
        { duration: '10s', target: delta * 6 },
        { duration: '10s', target: delta * 7 },
        { duration: '10s', target: delta * 8 },
        { duration: '10s', target: delta * 9 },
        { duration: '10s', target: delta * 10 },
    ],
};

export default () => {
    let res = http.get(`${BASE_URL}/agenda/buscar`, {
        headers: {
            'Authorization': token,
        },
    });
    check(res, { "status is 200": (r) => r.status === 200 });
}
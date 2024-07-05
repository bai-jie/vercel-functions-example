export async function GET(request) {
    errorHandler();
}

function errorHandler(/*_request: Request, error: unknown*/) {
    return new Response('Internal Server Error', { status: 500 });
}

export async function json(req, res) {
  const buffers = [];
  for await (const chunk of req) {
    buffers.push(chunk);
  }

  // const fullStreamContent = Buffer.concat(buffers).toString();
  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("content-type", "application/json");
}

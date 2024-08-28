export async function getDomainsStatus(domains) {
  console.log(domains);
  const body = JSON.stringify({ domains: domains });
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/getDomainsStatus`,
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  if (!response.ok) {
    alert("Error in fetching data");
    return {};
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export async function addDomains(domains) {
  console.log(domains);
  const body = JSON.stringify({ domains: domains });
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/addDomains`, {
    method: "POST",
    headers: headers,
    body: body,
  });
  if (!response.ok) {
    alert("Error in adding domains");
    return {};
  }
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getDKIMStatus(domains) {
  console.log(domains);
  const body = JSON.stringify({ domains: domains });
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/getDKIMStatus`, {
    method: "POST",
    headers: headers,
    body: body,
  });
  if (!response.ok) {
    alert("Error in fetching data");
    return {};
  }
  const data = await response.json();
  return data;
}

export async function addDKIM(domains) {
  console.log(domains);
  const body = JSON.stringify({ domains: domains });
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/addDKIM`, {
    method: "POST",
    headers: headers,
    body: body,
  });
  if (!response.ok) {
    alert("Error in adding domains");
    return {};
  }
  const data = await response.json();
  return data;
}

export async function enableIMAP(cred) {
  const body = JSON.stringify({
    credentials: cred,
  });
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/enableIMAP`, {
    method: "POST",
    headers: headers,
    body: body,
  });
  if (!response.ok) {
    alert("Error in adding domains");
    return {};
  }
  const data = await response.json();
  return data;
}

export async function addToSmartlead(data) {
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/addGmailAccountToSmartlead`,
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  if (!response.ok) {
    alert("Error in adding domains");
    return {};
  }
  const res = await response.json();
  return res;
}

export async function addToInstantly(data) {
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/addGmailAccountToInstantly`,
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  if (!response.ok) {
    alert("Error in adding domains");
    return {};
  }
  const res = await response.json();
  return res;
}

export async function addToEmailbison(data) {
  const body = JSON.stringify(data);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/addGmailAccountToEmailbison`,
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  if (!response.ok) {
    alert("Error in adding domains");
    return {};
  }
  const res = await response.json();
  return res;
}

export async function matchCredentials(creds) {
  const body = JSON.stringify(creds);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/matchCredentials`,
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  const res = await response.json();
  if (!response.ok) {
    alert(res.message || "Error");
    return;
  }
  alert(res.message);
  return;
}

export async function setCredentials(creds) {
  const body = JSON.stringify(creds);
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/setCredentials`,
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );
  const res = await response.json();
  if (!response.ok) {
    alert(res.message || "Error");
    return;
  }
  alert(res.message);
  return;
}

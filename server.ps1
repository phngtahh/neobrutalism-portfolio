# Native PowerShell Static Web Server
# Serves the portfolio website on http://localhost:3000

$port = 3000
$rootPath = "d:\Antigravity-Try"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "=================================================="
    Write-Host " Server is running at http://localhost:$port/"
    Write-Host " Press Ctrl+C in this console to stop the server."
    Write-Host "=================================================="
} catch {
    Write-Error "Failed to start listener: $_"
    exit
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") {
            $localPath = "/index.html"
        }

        # Normalize path separators for Windows
        $cleanPath = $localPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($rootPath, $cleanPath)

        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Identify MIME types
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                ".gif"  { "image/gif" }
                ".ico"  { "image/x-icon" }
                default { "application/octet-stream" }
            }

            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found - File: $localPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "404 - Not Found: $localPath"
        }
    } catch {
        Write-Host "Error processing request: $_"
    } finally {
        if ($null -ne $response) {
            $response.Close()
        }
    }
}

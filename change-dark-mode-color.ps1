$files = Get-ChildItem -Path "src" -Filter "*.jsx" -Recurse
$files += Get-Item "src\index.css"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw

    # Backgrounds
    $content = [regex]::Replace($content, '\bdark:bg-slate-900\b', 'dark:bg-black')
    $content = [regex]::Replace($content, '\bdark:bg-slate-800\b', 'dark:bg-zinc-900')
    $content = [regex]::Replace($content, '\bdark:bg-slate-800/50\b', 'dark:bg-zinc-900/50')
    $content = [regex]::Replace($content, '\bdark:bg-slate-800/80\b', 'dark:bg-zinc-900/80')
    $content = [regex]::Replace($content, '\bdark:bg-slate-700\b', 'dark:bg-zinc-800')

    # Borders
    $content = [regex]::Replace($content, '\bdark:border-slate-800\b', 'dark:border-zinc-800')
    $content = [regex]::Replace($content, '\bdark:border-slate-700\b', 'dark:border-zinc-800')
    $content = [regex]::Replace($content, '\bdark:border-slate-700/50\b', 'dark:border-zinc-800/50')

    Set-Content -Path $file.FullName -Value $content
}

Write-Host "Dark mode color update complete."

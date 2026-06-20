$files = Get-ChildItem -Path "src\pages" -Filter "*.jsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw

    # Find the big blue CTA sections and make them dark:bg-zinc-900 in dark mode
    if ($content -match "bg-brand-blue text-white") {
        $content = $content -replace 'bg-brand-blue text-white(?! dark:)', 'bg-brand-blue dark:bg-zinc-900 text-white dark:border-y dark:border-zinc-800 transition-colors duration-300'
        Set-Content -Path $file.FullName -Value $content
        Write-Host "Updated $($file.Name)"
    }
}

Write-Host "CTA color update complete."

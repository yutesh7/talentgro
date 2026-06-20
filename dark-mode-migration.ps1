$files = Get-ChildItem -Path "src\pages" -Filter "*.jsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw

    # Backgrounds
    $content = [regex]::Replace($content, '\bbg-white(?!/)', 'bg-white dark:bg-slate-800')
    $content = [regex]::Replace($content, '\bbg-slate-50(?!/)', 'bg-slate-50 dark:bg-slate-900')
    $content = [regex]::Replace($content, '\bbg-brand-light(?!/)', 'bg-brand-light dark:bg-slate-800/50')
    $content = [regex]::Replace($content, '\bbg-slate-100(?!/)', 'bg-slate-100 dark:bg-slate-700/50')
    $content = [regex]::Replace($content, '\bbg-slate-200(?!/)', 'bg-slate-200 dark:bg-slate-700')

    # Text Colors
    $content = [regex]::Replace($content, '\btext-slate-500\b', 'text-slate-500 dark:text-slate-400')
    $content = [regex]::Replace($content, '\btext-slate-600\b', 'text-slate-600 dark:text-slate-300')
    $content = [regex]::Replace($content, '\btext-slate-700\b', 'text-slate-700 dark:text-slate-200')
    $content = [regex]::Replace($content, '\btext-slate-800\b', 'text-slate-800 dark:text-slate-100')
    $content = [regex]::Replace($content, '\btext-brand-blue\b', 'text-brand-blue dark:text-white')

    # Borders
    $content = [regex]::Replace($content, '\bborder-slate-100\b', 'border-slate-100 dark:border-slate-700')
    $content = [regex]::Replace($content, '\bborder-slate-200\b', 'border-slate-200 dark:border-slate-700')

    Set-Content -Path $file.FullName -Value $content
}

Write-Host "Migration complete."

@echo off
echo ========================================
echo 🚀 Building React project with Vite...
echo ========================================
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b %errorlevel%
)

echo.
echo ✅ Build successful!
echo.
echo ========================================
echo 📤 Uploading to designingtheultimateyou.com...
echo ========================================

scp -P 65002 -r dist/* u408618914@145.79.28.132:/home/u408618914/domains/designingtheultimateyou.com/public_html/

if %errorlevel% neq 0 (
    echo ❌ Upload failed!
    pause
    exit /b %errorlevel%
)

echo.
echo ========================================
echo ✅ DEPLOY COMPLETE!
echo 🌐 https://designingtheultimateyou.com
echo ========================================
pause
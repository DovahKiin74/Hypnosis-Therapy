@echo off
echo ========================================
echo Building your React project...
echo ========================================
call npm run build

echo.
echo ========================================
echo Uploading to Hostinger...
echo ========================================
scp -P 65002 -r dist/* u408618914@145.79.28.132:/home/u408618914/domains/linen-guanaco-339583.hostingersite.com/public_html/

echo.
echo ========================================
echo Deploy complete! ✅
echo https://linen-guanaco-339583.hostingersite.com
echo ========================================
pause
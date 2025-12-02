@echo off
echo ================================
echo   Rakeen Auto Push Script
echo ================================

REM ====== اضبط مسار ملف ZIP هنا ======
SET ZIP_PATH="C:\Users\Adminstrator\Desktop\New folder (4)\rakeen-smart-site-client-ready.zip"

REM ====== اضبط مسار مجلد الريبو هنا ======
SET LOCAL_REPO_PATH=C:\Users\Adminstrator\Desktop\New folder (4)\rakeen-smart-site-client-ready

echo.
echo 🔵 1) استنساخ الريبو من GitHub...
gh repo clone hakaaaa22/rakeen-smart-site %LOCAL_REPO_PATH%

echo.
echo 🔵 2) فك الضغط لملفات المشروع...
powershell -Command "Expand-Archive -Path '%ZIP_PATH%' -DestinationPath '%LOCAL_REPO_PATH%' -Force"

echo.
echo 🔵 3) نسخ الملفات داخل الريبو...
xcopy "%LOCAL_REPO_PATH%\rakeen-smart-site-client-ready\*" "%LOCAL_REPO_PATH%" /E /H /C /I

echo.
echo 🔵 4) حذف الملف المضغوط بعد النسخ...
rmdir /S /Q "%LOCAL_REPO_PATH%\rakeen-smart-site-client-ready"

echo.
echo 🔵 5) تشغيل Git add/commit/push...
cd %LOCAL_REPO_PATH%
git add .
git commit -m "Auto push full Rakeen website"
git push

echo.
echo ================================
echo   ✔✔ تمت العملية بنجاح!
echo   جاهز للـ Deploy على Vercel
echo ================================
pause

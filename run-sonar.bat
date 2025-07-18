@echo off
set JAVA_HOME=C:\Users\luis\.jdks\corretto-11.0.24
set PATH=%JAVA_HOME%\bin;%PATH%
echo Using Java:
java -version
echo Running Sonar Scanner...
sonar-scanner -X
pause
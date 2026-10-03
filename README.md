# IoT_Workshop
IoT Workshop Exercises Performed During the workshop/internship period

# IoT Workshop

## 📖 Overview
An IoT Workshop was conducted during the Third Year, V Semester of the Bachelor of Engineering (B.E.) program.

The workshop focused on providing students with practical knowledge of **Internet of Things (IoT)**, **Embedded Systems**, **Arduino Uno**, and **React.js**.  
It combined hardware programming with modern web development concepts to help students understand how connected devices can interact with software applications.

The workshop emphasized **hands-on learning**, covering:
- Microcontroller programming
- Sensor and actuator interfacing
- Development of web-based interfaces for IoT applications

---

## 🎯 Workshop Objectives
- Understand the fundamentals of IoT  
- Learn basics of Embedded Systems  
- Explore Arduino Uno microcontroller board  
- Set up and program Arduino Uno  
- Work with digital & analog I/O operations  
- Configure Arduino pins  
- Learn PWM (Pulse Width Modulation)  
- Understand sensors and actuators  
- Learn basics of React.js  
- Integrate web applications with IoT systems  
- Gain practical hands-on experience through IoT experiments  

---

## 📚 Topics Covered

### 1. Internet of Things (IoT)
- Introduction to IoT  
- IoT architecture & devices  
- Sensors and actuators  
- Data collection & communication  
- Real-world IoT applications  

### 2. Embedded Systems
- Introduction to Embedded Systems  
- Microcontrollers & GPIO  
- Hardware/software interaction  
- Interfacing sensors & actuators  

### 3. Arduino Uno
- Board components (digital, analog, power pins)  
- Arduino IDE setup  
- Writing & uploading programs  
- Basic circuit connections  

### 4. Arduino IDE Setup
Steps included:
1. Installing Arduino IDE  
2. Connecting Arduino Uno via USB  
3. Selecting board & port  
4. Writing, compiling & uploading programs  

### 5. Arduino Programming
- **setup()** → runs once for initialization  
- **loop()** → runs continuously for main logic  
- **pinMode()** → configure pins as INPUT/OUTPUT  

Example:
```cpp
void setup() {
  pinMode(13, OUTPUT);
}
void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}

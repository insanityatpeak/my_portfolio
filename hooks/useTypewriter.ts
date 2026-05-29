import { useState, useEffect } from 'react';

export function useTypewriter(strings: string[], speed: number = 80) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [displayText, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % strings.length;
    const fullText = strings[i];

    setDisplayText(
      isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
    );

    setTypingSpeed(isDeleting ? speed / 2 : speed);

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
      setTypingSpeed(speed);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(speed);
    }
  };

  return { displayText, isDeleting };
}

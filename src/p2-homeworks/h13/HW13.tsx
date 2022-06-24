import React, { useState } from 'react';
import { RequestsAPI } from './RequestsAPI';
import { Request } from './RequestComponent';

function HW13() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState({ errorText: '', info: '' });

  const request = () => {
    setLoading(true);
    RequestsAPI.postRequest(success)
      .then(res => {
        console.log(res.data);
        setMessage(res.data);
      })
      .catch(err => {
        setError(err.message);
        setTimeout(() => {
          setError('');
          setMessage({ errorText: '', info: '' });
        }, 2000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {loading
        ? 'LOADING'
        : error ? <span>ERROR: {error}</span> : <>
          <div>
            errorText: {message.errorText}
          </div>
          <div>
            info: {message.info}
          </div>
        </>}
      <Request
        success={success}
        setSuccess={setSuccess}
        request={request}
      />
    </div>
  );
}

export default HW13;


import React, { Component } from 'react';
import './PasswordStrength.scss';
import zxcvbn from 'zxcvbn'

class PasswordStrength extends Component {

    passwordStrength = (result) => {
        switch (result.score) {
            case 0:
                return 'Very Weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return 'Weak';
        }
    }

    render() {
        const { password } = this.props;
        const testedResult = zxcvbn(password);
        return (
            <div className="password-strength">
                <progress
                    className={`password-strength-progress strength-${this.passwordStrength(testedResult)}`}
                    value={testedResult.score}
                    max="4"
                />
                <br />
                <label
                    className="password-strength-label"
                >
                    {password && (
                        <>
                            <strong>Password strength:</strong> {this.passwordStrength(testedResult)}
                        </>
                    )}
                </label>
            </div>
        );
    }
}

export default PasswordStrength;
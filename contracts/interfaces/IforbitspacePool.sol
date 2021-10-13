// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IforbitspacePoolImmutables.sol';
import './pool/IforbitspacePoolState.sol';
import './pool/IforbitspacePoolDerivedState.sol';
import './pool/IforbitspacePoolActions.sol';
import './pool/IforbitspacePoolOwnerActions.sol';
import './pool/IforbitspacePoolEvents.sol';

/// @title The interface for a forbitspace Pool
/// @notice A forbitspace pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IforbitspacePool is
    IforbitspacePoolImmutables,
    IforbitspacePoolState,
    IforbitspacePoolDerivedState,
    IforbitspacePoolActions,
    IforbitspacePoolOwnerActions,
    IforbitspacePoolEvents
{

}

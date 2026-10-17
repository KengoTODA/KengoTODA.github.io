# README v0.3.0

This file explains how to use Kengo TODA in your business.

## Basic Guideline

1. TODA as management wants to be open for teammates and others. Feel free to ask questions and to give opinions/feedback.
2. TODA is always free. Even when he is sitting and typing some, he should be free. Do not hesitate to disturb his typing.

## How to sign security.txt

```console
$ gpg --local-user D878D4A823EAE731B729D1A8D2151178A123C97F \
  --digest-algo SHA512 \
  --output .well-known/security.txt \
  --clearsign security/security.txt &&
$ gpg --verify .well-known/security.txt
```
